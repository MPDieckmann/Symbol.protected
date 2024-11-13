/**
 * Symbol.protected - 2024
 * Copyright (C) 2024 MPDieckmann
 * This file is part of Symbol.protected.
 * 
 * Symbol.protected is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Symbol.protected is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Symbol.protected. If not, see
 * <https://www.gnu.org/licenses/>.
 */
Symbol.protected = ((globalThis) => {
    const Symbol = globalThis.Symbol;
    const protected_symbols = new WeakSet();
    const getOwnPropertySymbols = globalThis.Object.getOwnPropertySymbols;
    const filter = Function.prototype.call.bind(globalThis.Array.prototype.filter);
    globalThis.Object.getOwnPropertySymbols = (o) => filter(getOwnPropertySymbols(o), s => !protected_symbols.has(s));
    return (description) => {
        const s = Symbol(description);
        protected_symbols.add(s);
        return s;
    };
})(globalThis || window || self || this);