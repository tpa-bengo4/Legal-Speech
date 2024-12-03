import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { useRoute } from "vue-router";
import ChatFrame from "@/components/chat/ChatFrame.vue";
import consultationData from "@/assets/json/consultations-list.json";
import messageData from "@/assets/json/consultation-messages.json";
import UserProfile from "@/components/UserProfile.vue";

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
    const wrapper = mount(ChatFrame, {
      props: {
        partnerInfo: consultationData.consultations[0],
        messages: messageData[0].messages,
      },
    });
    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(wrapper.find("img").attributes("src")).not.toBeNull();
    expect(wrapper.find(".header h2").text()).toBeTruthy();
  });

  it("チャット部分に、メッセージがある", () => {
    const wrapper = mount(ChatFrame, {
      props: {
        partnerInfo: consultationData.consultations[0],
        messages: messageData[0].messages,
      },
    });
    expect(wrapper.find(".msg-page .message").exists()).toBeTruthy();

    const allMessages = wrapper.findAll(".msg-page .message");
    allMessages.map((message) => {
      expect(message.text()).toBeTruthy();
    });
  });

  it("チャットの部分に、インプットとリーコードボタンがある", () => {
    const wrapper = mount(ChatFrame, {
      props: {
        partnerInfo: consultationData.consultations[0],
        messages: messageData[0].messages,
      },
    });
    expect(wrapper.find(".bottom input").exists()).toBeTruthy();
    expect(wrapper.find(".bottom .voice-button").exists).toBeTruthy();
  });

  it("ユーザー情報に、十分表示される", () => {
    const wrapper = mount(UserProfile, {
      props: {
        user: consultationData.consultations[0],
      },
    });
    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(wrapper.find("img").attributes("src")).toBe(
      consultationData.consultations[0].profilePicture,
    );
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("h2").text()).toBe(
      consultationData.consultations[0].name,
    );
  });
});
