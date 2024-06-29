import {src,dest} from "gulp";
import {deleteAsync} from "del";
import {paths} from "../config/paths.js";

export function clean() {
    return deleteAsync(paths.base.dist);
}