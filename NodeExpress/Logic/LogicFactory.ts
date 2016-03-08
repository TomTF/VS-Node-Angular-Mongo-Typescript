"use strict";
import locationLogic = require('./LocationLogic');

export function CreateLocationLogic() {
    return new locationLogic.LocationLogic();
}
