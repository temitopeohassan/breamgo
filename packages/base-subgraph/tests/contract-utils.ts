import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BlogPostCreated,
  OrderCompleted,
  OrderDisputed,
  OrderPlaced,
  OrderResolved,
  OwnershipTransferred,
  ProductCreated,
  RequestCreated
} from "../generated/Contract/Contract"

export function createBlogPostCreatedEvent(
  postId: BigInt,
  title: string,
  content: string,
  author: Address
): BlogPostCreated {
  let blogPostCreatedEvent = changetype<BlogPostCreated>(newMockEvent())

  blogPostCreatedEvent.parameters = new Array()

  blogPostCreatedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  blogPostCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  blogPostCreatedEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )
  blogPostCreatedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return blogPostCreatedEvent
}

export function createOrderCompletedEvent(orderId: BigInt): OrderCompleted {
  let orderCompletedEvent = changetype<OrderCompleted>(newMockEvent())

  orderCompletedEvent.parameters = new Array()

  orderCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return orderCompletedEvent
}

export function createOrderDisputedEvent(orderId: BigInt): OrderDisputed {
  let orderDisputedEvent = changetype<OrderDisputed>(newMockEvent())

  orderDisputedEvent.parameters = new Array()

  orderDisputedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return orderDisputedEvent
}

export function createOrderPlacedEvent(
  orderId: BigInt,
  productId: BigInt,
  buyer: Address
): OrderPlaced {
  let orderPlacedEvent = changetype<OrderPlaced>(newMockEvent())

  orderPlacedEvent.parameters = new Array()

  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return orderPlacedEvent
}

export function createOrderResolvedEvent(
  orderId: BigInt,
  recipient: Address
): OrderResolved {
  let orderResolvedEvent = changetype<OrderResolved>(newMockEvent())

  orderResolvedEvent.parameters = new Array()

  orderResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderResolvedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return orderResolvedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProductCreatedEvent(
  productId: BigInt,
  seller: Address
): ProductCreated {
  let productCreatedEvent = changetype<ProductCreated>(newMockEvent())

  productCreatedEvent.parameters = new Array()

  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return productCreatedEvent
}

export function createRequestCreatedEvent(
  requestId: BigInt,
  requester: Address
): RequestCreated {
  let requestCreatedEvent = changetype<RequestCreated>(newMockEvent())

  requestCreatedEvent.parameters = new Array()

  requestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestCreatedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )

  return requestCreatedEvent
}
