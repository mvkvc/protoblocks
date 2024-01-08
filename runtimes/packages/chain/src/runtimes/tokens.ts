import {
    RuntimeModule,
    runtimeModule,
    state,
    runtimeMethod
} from "@proto-kit/module";
import { State, StateMap, assert } from "@proto-kit/protocol";
import { PublicKey, UInt64, Field, Struct, Bool } from "o1js";

interface TokensConfig {
}

class TokenKey extends Struct({
    tokenId: Field,
    address: PublicKey
}) {}

class TokenConfig extends Struct({
    tokenId: Field,
})

@runtimeModule()
export class Tokens extends RuntimeModule<TokensConfig> {
    @state() public balances = StateMap.from(TokenKey, UInt64)
}

type GConstructor<T = {}> = new (...args: any[]) => T;

function MaxSupply<TBase extends GConstructor>(Base: TBase) {
    return class MaxSupply extends Base {


    }
}
