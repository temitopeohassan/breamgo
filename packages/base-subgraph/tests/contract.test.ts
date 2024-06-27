import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BlogPostCreated } from "../generated/schema"
import { BlogPostCreated as BlogPostCreatedEvent } from "../generated/Contract/Contract"
import { handleBlogPostCreated } from "../src/contract"
import { createBlogPostCreatedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let postId = BigInt.fromI32(234)
    let title = "Example string value"
    let content = "Example string value"
    let author = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBlogPostCreatedEvent = createBlogPostCreatedEvent(
      postId,
      title,
      content,
      author
    )
    handleBlogPostCreated(newBlogPostCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BlogPostCreated created and stored", () => {
    assert.entityCount("BlogPostCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BlogPostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "postId",
      "234"
    )
    assert.fieldEquals(
      "BlogPostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "BlogPostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "content",
      "Example string value"
    )
    assert.fieldEquals(
      "BlogPostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "author",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
