import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });
  it('should be able to add numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 1
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5)
  });
  it('should be able to subtract numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });
  it('should be able to multipy numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  });
  it('should be able to divide numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });
  it('should be able to concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(5)
    wrapper.vm.numberClick(2)
    wrapper.vm.numberClick(0)
    wrapper.vm.numberClick(7);
    expect(wrapper.vm.runningTotal).to.equal(5207)
  });
  it('should be able to chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(10)
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick(3)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(7)
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(33)
  });
})
