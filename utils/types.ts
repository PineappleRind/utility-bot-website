
export interface Server {
    name: string;
    id: string;
    icon: string;
    vanity: string;
    members: number;

}

export interface Shard{
    id: number;
    guilds: number;
    unavaibleGuilds: number;
    users: number;
    
}
export interface Stats{
    cpu: number;
    ram: string;
    totalRam: string;
    shardCount: number;
    guilds: number;
    users: number;

}

