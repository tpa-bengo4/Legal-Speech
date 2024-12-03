import { mount } from "test-utils";
import { describe, it, expect } from "vitest";
import ConsultationList from "@/components/consultation-list/ConsultationList.vue";
import ConsultationListData from "@/assets/json/consultations-list.json";

describe("ConsultationList", () => {
  it("renders the list of consultations correctly", () => {
    const wrapper = mount(ConsultationList);

    // Kiểm tra số lượng mục được hiển thị
    const items = wrapper.findAllComponents({ name: "ConsultationListItem" });
    expect(items.length).toBe(ConsultationListData.consultations.length);

    // Kiểm tra nội dung của mục đầu tiên
    const firstItem = ConsultationListData.consultations[0];
    expect(items[0].props().name).toBe(firstItem.name);
    expect(items[0].props().status).toBe(firstItem.status);
  });

  it("filters consultations based on search query", async () => {
    const wrapper = mount(ConsultationList);

    const searchQuery = "test"; // Một từ khóa giả lập
    await wrapper
      .findComponent({ name: "ConsultationListSearch" })
      .vm.$emit("change", searchQuery);

    // Kiểm tra các mục được lọc đúng
    const filteredItems = ConsultationListData.consultations.filter(
      (consultation) =>
        consultation.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    const renderedItems = wrapper.findAllComponents({
      name: "ConsultationListItem",
    });
    expect(renderedItems.length).toBe(filteredItems.length);
  });

  it("shows empty message when no consultations are found", async () => {
    const wrapper = mount(ConsultationList);

    const searchQuery = "nonexistent"; // Từ khóa không khớp với mục nào
    await wrapper
      .findComponent({ name: "ConsultationListSearch" })
      .vm.$emit("change", searchQuery);

    // Kiểm tra thông báo rỗng được hiển thị
    expect(wrapper.find(".empty-message").exists()).toBe(true);
    expect(wrapper.find(".empty-message").text()).toBe("相談が見つかりません");
  });

  //   it('calls selectConsultation when a consultation is clicked', async () => {
  //     const wrapper = mount(ConsultationList);
  //     const mockSelectConsultation = vi.fn();
  //     wrapper.vm.selectConsultation = mockSelectConsultation;

  //     const firstItem = wrapper.findComponent({ name: 'ConsultationListItem' });
  //     await firstItem.trigger('click');

  //     // Kiểm tra sự kiện click được gọi với tham số đúng
  //     const firstConsultation = ConsultationListData.consultations[0];
  //     expect(mockSelectConsultation).toHaveBeenCalledWith(firstConsultation);
  //   });
});
