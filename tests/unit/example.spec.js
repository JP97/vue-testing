import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Counter, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  }),

  //up to this point comes automaticly when writing "vue add @vue/unit-jest"
  it('check if the increment button is pressed correctly', () =>{
    const wrapper = shallowMount(Counter);
    expect(wrapper.vm.counter).toBe(0);
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.counter).toBe(1);
  })
})
