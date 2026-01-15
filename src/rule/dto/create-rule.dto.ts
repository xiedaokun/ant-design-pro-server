export class CreateRuleDto {
  name: string;
  disabled?: boolean;
  href?: string;
  avatar?: string;
  owner?: string;
  desc?: string;
  callNo?: number;
  status?: string;
  progress?: number;
}
