export interface HeroInterface {
  id: number;
  name: string;
  health: number;
  weaponId?: number;
  armourId?: number;
  imageSrc?: string | ArrayBuffer | null;
}