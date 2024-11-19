import { WTTInstanceManager } from "./WTTInstanceManager";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

export class epicItemClass {

    private Instance: WTTInstanceManager = new WTTInstanceManager();

    public preSptLoad(Instance: WTTInstanceManager): void {
        this.Instance = Instance;
    }

    public postDBLoad(): void {

        this.epicEdits();
    }

    public epicEdits(): void {
        const db: IDatabaseTables = this.Instance.database;
        const dbItems = db.templates.items;
        for (let file in dbItems) {
            let fileData = dbItems[file];
            if(fileData._id === "5448c1d04bdc2dff2f8b4569") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "544a378f4bdc2d30388b4567") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "544a37c44bdc2d25388b4567") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "55802d5f4bdc2dac148b458e") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "55d4887d4bdc2d962f8b4570") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "59c1383d86f774290a37e0ca") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5aaa5dfee5b5b000140293d3") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5aaa5e60e5b5b000140293d6") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5c05413a0db834001c390617") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5c6592372e221600133e47d7") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5c6d42cb2e2216000e69d7d1") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5c6d450c2e221600114c997d") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5c6d46132e221601da357d56") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5d1340b3d7ad1a0b52682ed7") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5d1340bdd7ad1a0e8d245aab") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5d1340cad7ad1a0b0b249869") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
            if(fileData._id === "5c07c60e0db834002330051f") {
                fileData._props.Chambers[0]._props.filters[0].Filter.push("6737b3c662a03ab20667f02a");
            }
        }
    }


}
