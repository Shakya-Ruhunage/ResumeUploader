export class Resume {
    id: string;
    nic: string;
    link: string;

    public set $id(id: string) {
        this.id = id;
    }

    public set $nic(nic: string) {
        this.nic = nic;
    }

    public set $link(link: string) {
        this.link = link;
    }

    public get $id() {
        return this.id;
    }

    public get $nic() {
        return this.nic;
    }

    public get $link() {
        return this.link;
    }

}