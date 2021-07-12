// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Contract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Contract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Contract", id.toString(), this);
  }

  static load(id: string): Contract | null {
    return store.get("Contract", id) as Contract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalUSD(): BigInt {
    let value = this.get("totalUSD");
    return value.toBigInt();
  }

  set totalUSD(value: BigInt) {
    this.set("totalUSD", Value.fromBigInt(value));
  }

  get depositsOpen(): boolean {
    let value = this.get("depositsOpen");
    return value.toBoolean();
  }

  set depositsOpen(value: boolean) {
    this.set("depositsOpen", Value.fromBoolean(value));
  }

  get withdrawalsOpen(): boolean {
    let value = this.get("withdrawalsOpen");
    return value.toBoolean();
  }

  set withdrawalsOpen(value: boolean) {
    this.set("withdrawalsOpen", Value.fromBoolean(value));
  }

  get privateFarmingOpen(): boolean {
    let value = this.get("privateFarmingOpen");
    return value.toBoolean();
  }

  set privateFarmingOpen(value: boolean) {
    this.set("privateFarmingOpen", Value.fromBoolean(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get oracle(): string {
    let value = this.get("oracle");
    return value.toString();
  }

  set oracle(value: string) {
    this.set("oracle", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get total(): BigInt {
    let value = this.get("total");
    return value.toBigInt();
  }

  set total(value: BigInt) {
    this.set("total", Value.fromBigInt(value));
  }
}

export class Oracle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Oracle entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Oracle entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Oracle", id.toString(), this);
  }

  static load(id: string): Oracle | null {
    return store.get("Oracle", id) as Oracle | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get oracleAddr(): Bytes {
    let value = this.get("oracleAddr");
    return value.toBytes();
  }

  set oracleAddr(value: Bytes) {
    this.set("oracleAddr", Value.fromBytes(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pool", id.toString(), this);
  }

  static load(id: string): Pool | null {
    return store.get("Pool", id) as Pool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositedToken(): string {
    let value = this.get("depositedToken");
    return value.toString();
  }

  set depositedToken(value: string) {
    this.set("depositedToken", Value.fromString(value));
  }

  get amountDeposited(): BigInt {
    let value = this.get("amountDeposited");
    return value.toBigInt();
  }

  set amountDeposited(value: BigInt) {
    this.set("amountDeposited", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get participant(): boolean {
    let value = this.get("participant");
    return value.toBoolean();
  }

  set participant(value: boolean) {
    this.set("participant", Value.fromBoolean(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }
}

export class Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Balance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Balance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Balance", id.toString(), this);
  }

  static load(id: string): Balance | null {
    return store.get("Balance", id) as Balance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get total(): BigInt {
    let value = this.get("total");
    return value.toBigInt();
  }

  set total(value: BigInt) {
    this.set("total", Value.fromBigInt(value));
  }
}

export class WhiteList extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WhiteList entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WhiteList entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WhiteList", id.toString(), this);
  }

  static load(id: string): WhiteList | null {
    return store.get("WhiteList", id) as WhiteList | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get root(): Bytes {
    let value = this.get("root");
    return value.toBytes();
  }

  set root(value: Bytes) {
    this.set("root", Value.fromBytes(value));
  }

  get enabled(): boolean {
    let value = this.get("enabled");
    return value.toBoolean();
  }

  set enabled(value: boolean) {
    this.set("enabled", Value.fromBoolean(value));
  }
}

export class TransferToTreasury extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferToTreasury entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferToTreasury entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferToTreasury", id.toString(), this);
  }

  static load(id: string): TransferToTreasury | null {
    return store.get("TransferToTreasury", id) as TransferToTreasury | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }
}

export class FinalizedAsset extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FinalizedAsset entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FinalizedAsset entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FinalizedAsset", id.toString(), this);
  }

  static load(id: string): FinalizedAsset | null {
    return store.get("FinalizedAsset", id) as FinalizedAsset | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): Array<string> {
    let value = this.get("token");
    return value.toStringArray();
  }

  set token(value: Array<string>) {
    this.set("token", Value.fromStringArray(value));
  }

  get privateFarming(): boolean {
    let value = this.get("privateFarming");
    return value.toBoolean();
  }

  set privateFarming(value: boolean) {
    this.set("privateFarming", Value.fromBoolean(value));
  }
}
