export class Entree {
    private nic: string;
    private fname: string;
    private lname: string;
    private jobCategory: string;
    private gender: string;
    private location: string;
    private position: string;
    private date : Date;
    private user : string;


    /**
     * Getter $nic
     * @return {string}
     */
	public get $nic(): string {
		return this.nic;
	}

    /**
     * Getter $fname
     * @return {string}
     */
	public get $fname(): string {
		return this.fname;
	}

    /**
     * Getter $lname
     * @return {string}
     */
	public get $lname(): string {
		return this.lname;
	}

    /**
     * Getter $jobCategory
     * @return {string}
     */
	public get $jobCategory(): string {
		return this.jobCategory;
	}

    /**
     * Getter $gender
     * @return {string}
     */
	public get $gender(): string {
		return this.gender;
	}

    /**
     * Getter $location
     * @return {string}
     */
	public get $location(): string {
		return this.location;
	}

    /**
     * Getter $position
     * @return {string}
     */
	public get $position(): string {
		return this.position;
    }

    /**
     *Getter $date
     *@returns {Date}
     */
    public get $date():Date{
        return this.date;
    }

    
    /**
     * Getter $user
     * @return {string}
     */
    public get $user():string{
        return this.user;
    }

    /**
     * Setter $nic
     * @param {string} value
     */
	public set $nic(value: string) {
		this.nic = value;
	}

    /**
     * Setter $fname
     * @param {string} value
     */
	public set $fname(value: string) {
		this.fname = value;
	}

    /**
     * Setter $lname
     * @param {string} value
     */
	public set $lname(value: string) {
		this.lname = value;
	}

    /**
     * Setter $jobCategory
     * @param {string} value
     */
	public set $jobCategory(value: string) {
		this.jobCategory = value;
	}

    /**
     * Setter $gender
     * @param {string} value
     */
	public set $gender(value: string) {
		this.gender = value;
	}

    /**
     * Setter $location
     * @param {string} value
     */
	public set $location(value: string) {
		this.location = value;
	}

    /**
     * Setter $position
     * @param {string} value
     */
	public set $position(value: string) {
		this.position = value;
    }
    
    /**
     * setter for date
     */
    public set $date(value : Date){
        this.date = value;
    }

    public set $user(value:string){
        this.user = value;
    }

}



