import webComponents from "./index.web";
import nativeComponents from "./index.native";
import { isNative } from "../../helpers";

export default isNative ? nativeComponents : webComponents;
