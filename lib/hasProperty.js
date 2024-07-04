"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasProperty = hasProperty;
/**
 * `o`が指定のプロパティを持つかどうかを検査します。
 * @param o 検査対象の値
 * @param key 検査するプロパティのキー
 * @returns `o`が指定のプロパティを持っていれば真を返します。
 *
 * この関数が真を返した場合は、`o[key]`などでアクセスできるようになります。
 */
function hasProperty(o, key) {
    return typeof o === 'object' && o !== null && key in o;
}
//# sourceMappingURL=hasProperty.js.map