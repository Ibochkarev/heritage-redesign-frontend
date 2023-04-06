import LazyLoad from "vanilla-lazyload";
const lazyLoadInstance = new LazyLoad({});
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
window.Fancybox = Fancybox;
Fancybox.defaults.autoFocus = false;
Fancybox.bind()

import "%components%/m_slider_section/m_slider_section";