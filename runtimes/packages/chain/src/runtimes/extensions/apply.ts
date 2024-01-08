type Constructor<T = {}> = new (...args: any[]) => T;

export function applyExtensions<T extends Constructor, Mixins extends Constructor[]>(Base: T, mixins: Mixins): T & Mixins[number] {
    mixins.forEach(mixin => {
      Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
        Base.prototype[name] = mixin.prototype[name];
      });
    });
    return Base as T & Mixins[number];
  }
