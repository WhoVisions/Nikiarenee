import { describe, it, expect } from "vitest";
import { env } from "@/lib/env";

describe("env", () => {
  it("should have a nikiaName property", () => {
    expect(env.nikiaName).toBeDefined();
    expect(typeof env.nikiaName).toBe("string");
  });

  it("should have a links object", () => {
    expect(env.links).toBeDefined();
    expect(typeof env.links).toBe("object");
  });

  it("should have all required link properties", () => {
    expect(env.links).toHaveProperty("igMain");
    expect(env.links).toHaveProperty("twitch");
    expect(env.links).toHaveProperty("ofPaid");
    expect(env.links).toHaveProperty("fansly");
  });
});
