import webComponents from "./web";
import nativeComponents from "./native";
import { isNative } from "../helpers";

export default isNative ? nativeComponents : webComponents;
