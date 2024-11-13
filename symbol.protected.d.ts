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
interface SymbolConstructor {
    /**
     * Returns a new unique Symbol value that cannot be retrieved by a call to Object.getOwnPropertySymbols and thereby is protected.
     * @param  description Description of the new Symbol object.
     */
    protected(description?: string | number): symbol;
}
