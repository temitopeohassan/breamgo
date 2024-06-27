








// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Marketplace is Ownable, ReentrancyGuard {
    uint256 private _productIdCounter;
    uint256 private _requestIdCounter;
    uint256 private _orderIdCounter;
    uint256 private _blogPostIdCounter;

    enum OrderStatus { Pending, Completed, Cancelled, Dispute }

    struct Product {
        uint256 id;
        address payable seller;
        string name;
        string image;
        string description;
        uint256 minQuantity;
        uint256 price; // price per unit
    }

    struct Request {
        uint256 id;
        address requester;
        string productName;
        string description;
        uint256 quantity;
        uint256 budget;
    }

    struct Order {
        uint256 id;
        uint256 productId;
        address buyer;
        uint256 quantity;
        uint256 totalAmount;
        OrderStatus status;
    }

    struct BlogPost {
        uint256 id;
        string title;
        string content;
        address author;
    }

    mapping(uint256 => Product) public products;
    mapping(uint256 => Request) public requests;
    mapping(uint256 => Order) public orders;
    mapping(address => uint256[]) public sellerProducts;
    mapping(address => uint256[]) public buyerOrders;
    mapping(uint256 => BlogPost) public blogPosts;

    event ProductCreated(uint256 productId, address seller);
    event RequestCreated(uint256 requestId, address requester);
    event OrderPlaced(uint256 orderId, uint256 productId, address buyer);
    event OrderCompleted(uint256 orderId);
    event OrderDisputed(uint256 orderId);
    event OrderResolved(uint256 orderId, address recipient);
    event BlogPostCreated(uint256 postId, string title, string content, address author);

    // Create a new product
    function createProduct(
        string memory _name,
        string memory _image,
        string memory _description,
        uint256 _minQuantity,
        uint256 _price
    ) public {
        uint256 productId = _productIdCounter++;
        products[productId] = Product({
            id: productId,
            seller: payable(msg.sender),
            name: _name,
            image: _image,
            description: _description,
            minQuantity: _minQuantity,
            price: _price
        });

        sellerProducts[msg.sender].push(productId);
        emit ProductCreated(productId, msg.sender);
    }

    // Create a new request for a product
    function createRequest(
        string memory _productName,
        string memory _description,
        uint256 _quantity,
        uint256 _budget
    ) public {
        uint256 requestId = _requestIdCounter++;
        requests[requestId] = Request({
            id: requestId,
            requester: msg.sender,
            productName: _productName,
            description: _description,
            quantity: _quantity,
            budget: _budget
        });

        emit RequestCreated(requestId, msg.sender);
    }

    // Place an order for a product
    function placeOrder(uint256 _productId, uint256 _quantity) public payable nonReentrant {
        Product memory product = products[_productId];
        require(_quantity >= product.minQuantity, "Quantity less than minimum required");
        uint256 totalAmount = product.price * _quantity;
        require(msg.value == totalAmount, "Incorrect payment amount");

        uint256 orderId = _orderIdCounter++;
        orders[orderId] = Order({
            id: orderId,
            productId: _productId,
            buyer: msg.sender,
            quantity: _quantity,
            totalAmount: totalAmount,
            status: OrderStatus.Pending
        });

        buyerOrders[msg.sender].push(orderId);
        emit OrderPlaced(orderId, _productId, msg.sender);
    }

    // Complete an order (only the buyer can mark the order as completed)
    function completeOrder(uint256 _orderId) public nonReentrant {
        Order storage order = orders[_orderId];
        require(order.status == OrderStatus.Pending, "Order already completed, cancelled, or in dispute");
        require(msg.sender == order.buyer, "Only the buyer can mark the order as completed");

        order.status = OrderStatus.Completed;
        Product memory product = products[order.productId];
        product.seller.transfer(order.totalAmount);

        emit OrderCompleted(_orderId);
    }

    // Mark an order as disputed
    function disputeOrder(uint256 _orderId) public {
        Order storage order = orders[_orderId];
        require(order.status == OrderStatus.Pending, "Order already completed, cancelled, or in dispute");
        require(msg.sender == order.buyer || msg.sender == products[order.productId].seller, "Only the buyer or seller can dispute the order");

        order.status = OrderStatus.Dispute;
        emit OrderDisputed(_orderId);
    }

    // Resolve a disputed order (only the contract owner can resolve disputes)
    function resolveDispute(uint256 _orderId, bool refundBuyer) public onlyOwner nonReentrant {
        Order storage order = orders[_orderId];
        require(order.status == OrderStatus.Dispute, "Order not in dispute");

        order.status = OrderStatus.Cancelled; // Set status to Cancelled to prevent further actions

        if (refundBuyer) {
            payable(order.buyer).transfer(order.totalAmount);
            emit OrderResolved(_orderId, order.buyer);
        } else {
            products[order.productId].seller.transfer(order.totalAmount);
            emit OrderResolved(_orderId, products[order.productId].seller);
        }
    }

    // Add a blog post (only the contract owner can add posts)
    function addBlogPost(string memory _title, string memory _content) public onlyOwner {
        uint256 postId = _blogPostIdCounter++;
        blogPosts[postId] = BlogPost({
            id: postId,
            title: _title,
            content: _content,
            author: msg.sender
        });

        emit BlogPostCreated(postId, _title, _content, msg.sender);
    }
}
