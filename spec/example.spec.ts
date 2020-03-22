import { mount } from '@vue/test-utils'

describe('vue', () => {
    it('component', () => {
        const message = 'test'
        const div     = { data() { return { message } }, template: '<div>{{ message }}</div>' }
        const wrapper = mount(div)

        expect(wrapper.html()).toBe('<div>test</div>')
    })
})
