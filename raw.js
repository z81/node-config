/**
 * This is meant to wrap configuration objects that should be left as is,
 * meaning that the object or its prototype will not be modified in any way
 */
export function RawConfig () {
}

export function raw(rawObj) {
  var obj = Object.create(RawConfig.prototype);
  obj.resolve = function () { return rawObj; }
  return obj;
}
