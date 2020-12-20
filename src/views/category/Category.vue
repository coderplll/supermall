<template>
<!--
  传入两个组件,父传子
  监听两个事件
  通过ref调用组件内的方法,父访问子
-->
  <div id="category">
    <div class="fen">分类</div>
    <scroll class="content">
      <!--1.无论是否设置click:false, button都可以点击-->
      <button @click="btnClick">按钮</button>

      <!--2.必须设置click:true, 那么div才能监听点击-->
      <div @click="divClick">呵呵呵呵</div>

      <ul>
        <li>分类列表1</li>
        <li>分类列表2</li>
        <li>分类列表3</li>
        <li>分类列表4</li>
        <li>分类列表5</li>
        <li>分类列表6</li>
        <li>分类列表7</li>
        <li>分类列表8</li>
        <li>分类列表9</li>
        <li>分类列表10</li>
        <li>分类列表11</li>
        <li>分类列表12</li>
        <li>分类列表13</li>
        <li>分类列表14</li>
        <li>分类列表15</li>
        <li>分类列表16</li>
        <li>分类列表17</li>
        <li>分类列表18</li>
        <li>分类列表19</li>
        <li>分类列表20</li>
        <li>分类列表21</li>
        <li>分类列表22</li>
        <li>分类列表23</li>
        <li>分类列表24</li>
        <li>分类列表25</li>
        <li>分类列表26</li>
        <li>分类列表27</li>
        <li>分类列表28</li>
        <li>分类列表29</li>
        <li>分类列表30</li>
        <li>分类列表31</li>
        <li>分类列表32</li>
        <li>分类列表33</li>
        <li>分类列表34</li>
        <li>分类列表35</li>
        <li>分类列表36</li>
        <li>分类列表37</li>
        <li>分类列表38</li>
        <li>分类列表39</li>
        <li>分类列表40</li>
        <li>分类列表41</li>
        <li>分类列表42</li>
        <li>分类列表43</li>
        <li>分类列表44</li>
        <li>分类列表45</li>
        <li>分类列表46</li>
        <li>分类列表47</li>
        <li>分类列表48</li>
        <li>分类列表49</li>
        <li>分类列表50</li>
        <li>分类列表51</li>
        <li>分类列表52</li>
        <li>分类列表53</li>
        <li>分类列表54</li>
        <li>分类列表55</li>
        <li>分类列表56</li>
        <li>分类列表57</li>
        <li>分类列表58</li>
        <li>分类列表59</li>
        <li>分类列表60</li>
        <li>分类列表61</li>
        <li>分类列表62</li>
        <li>分类列表63</li>
        <li>分类列表64</li>
        <li>分类列表65</li>
        <li>分类列表66</li>
        <li>分类列表67</li>
        <li>分类列表68</li>
        <li>分类列表69</li>
        <li>分类列表70</li>
        <li>分类列表71</li>
        <li>分类列表72</li>
        <li>分类列表73</li>
        <li>分类列表74</li>
        <li>分类列表75</li>
        <li>分类列表76</li>
        <li>分类列表77</li>
        <li>分类列表78</li>
        <li>分类列表79</li>
        <li>分类列表80</li>
        <li>分类列表81</li>
        <li>分类列表82</li>
        <li>分类列表83</li>
        <li>分类列表84</li>
        <li>分类列表85</li>
        <li>分类列表86</li>
        <li>分类列表87</li>
        <li>分类列表88</li>
        <li>分类列表89</li>
        <li>分类列表90</li>
        <li>分类列表91</li>
        <li>分类列表92</li>
        <li>分类列表93</li>
        <li>分类列表94</li>
        <li>分类列表95</li>
        <li>分类列表96</li>
        <li>分类列表97</li>
        <li>分类列表98</li>
        <li>分类列表99</li>
        <li>分类列表100</li>
      </ul>
      <ul>
        <li>as1</li>
        <li>as2</li>
        <li>as3</li>
        <li>as4</li>
        <li>as5</li>
        <li>as6</li>
        <li>as7</li>
        <li>as8</li>
        <li>as9</li>
        <li>as10</li>
        <li>as11</li>
        <li>as12</li>
        <li>as13</li>
        <li>as14</li>
        <li>as15</li>
        <li>as16</li>
        <li>as17</li>
        <li>as18</li>
        <li>as19</li>
        <li>as20</li>
        <li>as21</li>
        <li>as22</li>
        <li>as23</li>
        <li>as24</li>
        <li>as25</li>
        <li>as26</li>
        <li>as27</li>
        <li>as28</li>
        <li>as29</li>
        <li>as30</li>
        <li>as31</li>
        <li>as32</li>
        <li>as33</li>
        <li>as34</li>
        <li>as35</li>
        <li>as36</li>
        <li>as37</li>
        <li>as38</li>
        <li>as39</li>
        <li>as40</li>
        <li>as41</li>
        <li>as42</li>
        <li>as43</li>
        <li>as44</li>
        <li>as45</li>
        <li>as46</li>
        <li>as47</li>
        <li>as48</li>
        <li>as49</li>
        <li>as50</li>
        <li>as51</li>
        <li>as52</li>
        <li>as53</li>
        <li>as54</li>
        <li>as55</li>
        <li>as56</li>
        <li>as57</li>
        <li>as58</li>
        <li>as59</li>
        <li>as60</li>
        <li>as61</li>
        <li>as62</li>
        <li>as63</li>
        <li>as64</li>
        <li>as65</li>
        <li>as66</li>
        <li>as67</li>
        <li>as68</li>
        <li>as69</li>
        <li>as70</li>
        <li>as71</li>
        <li>as72</li>
        <li>as73</li>
        <li>as74</li>
        <li>as75</li>
        <li>as76</li>
        <li>as77</li>
        <li>as78</li>
        <li>as79</li>
        <li>as80</li>
        <li>as81</li>
        <li>as82</li>
        <li>as83</li>
        <li>as84</li>
        <li>as85</li>
        <li>as86</li>
        <li>as87</li>
        <li>as88</li>
        <li>as89</li>
        <li>as90</li>
        <li>as91</li>
        <li>as92</li>
        <li>as93</li>
        <li>as94</li>
        <li>as95</li>
        <li>as96</li>
        <li>as97</li>
        <li>as98</li>
        <li>as99</li>
        <li>as100</li>
      </ul>
    </scroll>

  </div>

</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
export default {
  name: "Category",

  components: {
    Scroll
  },

  methods: {
    btnClick() {
      console.log('btnClick');
    },
    divClick() {
      console.log('divClick');
    }
  }
}
</script>

<style scoped>

#category {
  height: 100vh;
  position: relative;
}

.content {
  overflow: hidden;
  position: absolute;
  background-color: pink;
  top: 44px;
  bottom: 100px;
  left: 0;
  right: 0;
}

button {
  position: fixed;
  top: 50px;
  z-index: 9;
}
</style>
