"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnrestrictedEyeWear {
   postDBLoad(container) {
      // Get the logger from the server container
      const logger = container.resolve("WinstonLogger");
      // Get database from server
      const db = container.resolve("DatabaseServer");
      // Get tables from database
      const tables = db.getTables();
      // Get item database from tables
      const itemDB = tables.templates.items;
      for (let item in itemDB) {
         // Find all facecovers and unblocks eyewear
         if (itemDB[item]._parent == "5448e5724bdc2ddf718b4568" && itemDB[item]_props.BlocksEyewear) {
            itemDB[item]._props.BlocksEyewear = false;
         }
      }
      logger.info("[Unrestricted Eyewear] VAFELZ - Eyewear Unrestricted");
   }
}
module.exports = { mod: new UnrestrictedEyeWear}