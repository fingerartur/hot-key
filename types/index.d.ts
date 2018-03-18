interface Config {
    domNode: HTMLElement,
    symbols?: number,
    delay?: number,
    rules?: Array<Rule>,
}

interface Rule {
    name: string,
    codes: Array<number>
}

type Handler = (event: KeyboardEvent) => void;

export class HotKey {
    constructor(config: Config);
    start(): void;
    stop(): void;
    on(key: string | Array<string>, handler: Handler): void;
    setRules(rules: Array<Rule>): void;
    getRules(): Array<Rule>;
}