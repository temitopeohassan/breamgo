import {
  BlogPostCreated as BlogPostCreatedEvent,
  OrderCompleted as OrderCompletedEvent,
  OrderDisputed as OrderDisputedEvent,
  OrderPlaced as OrderPlacedEvent,
  OrderResolved as OrderResolvedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProductCreated as ProductCreatedEvent,
  RequestCreated as RequestCreatedEvent
} from "../generated/Contract/Contract"
import {
  BlogPostCreated,
  OrderCompleted,
  OrderDisputed,
  OrderPlaced,
  OrderResolved,
  OwnershipTransferred,
  ProductCreated,
  RequestCreated
} from "../generated/schema"

export function handleBlogPostCreated(event: BlogPostCreatedEvent): void {
  let entity = new BlogPostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.title = event.params.title
  entity.content = event.params.content
  entity.author = event.params.author

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCompleted(event: OrderCompletedEvent): void {
  let entity = new OrderCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderDisputed(event: OrderDisputedEvent): void {
  let entity = new OrderDisputed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderPlaced(event: OrderPlacedEvent): void {
  let entity = new OrderPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.productId = event.params.productId
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderResolved(event: OrderResolvedEvent): void {
  let entity = new OrderResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductCreated(event: ProductCreatedEvent): void {
  let entity = new ProductCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.productId = event.params.productId
  entity.seller = event.params.seller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestCreated(event: RequestCreatedEvent): void {
  let entity = new RequestCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.requester = event.params.requester

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
