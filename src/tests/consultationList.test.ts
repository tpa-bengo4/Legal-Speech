import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import ConsultationList from "@/components/consultation-list/ConsultationList.vue";
import ConsultationListData from "@/assets/json/consultations-list.json";

describe("ConsultationList", () => {
  //相談の数が元のデータと一致することを確認します
  it("相談一覧を正しく表示します", () => {
    const wrapper = mount(ConsultationList);

    const items = wrapper.findAllComponents({ name: "ConsultationListItem" });
    expect(items.length).toEqual(ConsultationListData.consultations.length);

    //最初の相談の内容を確認します
    const firstItem = ConsultationListData.consultations[0];
    expect(items[0].props().name).toEqual(firstItem.name);
    expect(items[0].props().lastMessage).toEqual(firstItem.lastMessage);
    expect(items[0].props().status).toEqual(firstItem.status);
  });

  //検索結果の長さを確認する
  it("検索クエリに基づいて相談をフィルタリングします", async () => {
    const wrapper = mount(ConsultationList);

    const searchQuery = "佐藤";
    await wrapper
      .findComponent({ name: "ConsultationListSearch" })
      .vm.$emit("change", searchQuery);

    //データに基づいた検索結果
    const filteredItems = ConsultationListData.consultations.filter(
      (consultation) =>
        consultation.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    //結果が表示される
    const renderedItems = wrapper.findAllComponents({
      name: "ConsultationListItem",
    });
    expect(renderedItems.length).toEqual(filteredItems.length);
  });

  //見つからないメッセージを確認する
  it("相談が見つからない場合は空のメッセージを表示します", async () => {
    const wrapper = mount(ConsultationList);

    const searchQuery = "nonexistent";
    await wrapper
      .findComponent({ name: "ConsultationListSearch" })
      .vm.$emit("change", searchQuery);

    expect(wrapper.find(".empty-message").exists()).toBe(true);
    expect(wrapper.find(".empty-message").text()).toBe("相談が見つかりません");
  });
});
