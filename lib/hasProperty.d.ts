/**
 * `o`が指定のプロパティを持つかどうかを検査します。
 * @param o 検査対象の値
 * @param key 検査するプロパティのキー
 * @returns `o`が指定のプロパティを持っていれば真を返します。
 *
 * この関数が真を返した場合は、`o[key]`などでアクセスできるようになります。
 */
export declare function hasProperty<KEY extends PropertyKey>(o: unknown, key: KEY): o is Record<KEY, unknown>;
