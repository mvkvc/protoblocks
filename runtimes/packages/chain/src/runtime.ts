import { UInt64 } from "o1js";
import { Balances } from "./runtimes/native";
import { Tokens } from "./runtimes/tokens";
import { applyExtensions} from "./extensions/apply";
import {
  RuntimeModule,
} from "@proto-kit/module";
// import {}

export default {
  modules: {
    Balances,
    applyExtensions(Tokens, []),
  },
  config: {
    Balances: {
      totalSupply: UInt64.from(10000),
    },
    Tokens: {},
  },
};
