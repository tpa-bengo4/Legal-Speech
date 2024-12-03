import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { useRoute } from "vue-router";
import ChatFrame from "@/components/chat/ChatFrame.vue";

vi.mock("vue-router");

describe("ChatScreen", () => {
  let routeMock;

  beforeEach(() => {
    routeMock = {
      params: { partnerId: "12" }, // Mock the route parameters
    };

    useRoute.mockReturnValue(routeMock);
  });

  it("チャット部分の上に、ユーザー情報があるがある", () => {
    const wrapper = mount(ChatFrame);
    expect(wrapper.find("img").attributes("src")).not.toBeNull();
    expect(wrapper.find(".header h2").text()).toBeTruthy();
  });

  it("チャット部分に、メッセージがある", () => {
    const wrapper = mount(ChatFrame);
    expect(wrapper.find(".msg-page .message").exists()).toBeTruthy();

    const allMessages = wrapper.findAll(".msg-page .message");
    allMessages.map((message) => {
      expect(message.text()).toBeTruthy();
    });
  });

  it("チャットの部分に、インプットとリーコードボタンがある", () => {
    const wrapper = mount(ChatFrame);
    expect(wrapper.find(".bottom input").exists()).toBeTruthy();
    expect(wrapper.find(".bottom .voice-button").exists).toBeTruthy();
  });
});
