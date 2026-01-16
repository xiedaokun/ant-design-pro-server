/**
 * 标签服务
 * 提供城市标签数据（用于标签云展示）
 */
import { Injectable } from '@nestjs/common';
import { TagsResponseDto, TagItemDto } from './dto/tags.dto';

@Injectable()
export class TagsService {
  /** 城市名称列表 */
  private readonly cities = [
    '阿勒泰地区',
    '玉树藏族自治州',
    '鄂尔多斯市',
    '海北藏族自治州',
    '双鸭山市',
    '济宁市',
    '揭阳市',
    '重庆市',
    '达州市',
    '石家庄市',
    '衢州市',
    '张掖市',
    '楚雄彝族自治州',
    '高雄市',
    '海西蒙古族藏族自治州',
    '新乡市',
    '克孜勒苏柯尔克孜自治州',
    '黔西南布依族苗族自治州',
    '莆田市',
    '锡林郭勒盟',
    '梧州市',
    '鹤壁市',
    '白银市',
    '大庆市',
    '离岛',
    '伊犁哈萨克自治州',
    '邵阳市',
    '海外',
    '保定市',
    '拉萨市',
    '那曲地区',
    '和田地区',
    '萍乡市',
    '遵义市',
    '上海市',
    '阳泉市',
    '鹰潭市',
    '漯河市',
    '天津市',
    '酒泉市',
    '固原市',
    '辽源市',
    '北京市',
    '苏州市',
    '中卫市',
    '海口市',
    '龙岩市',
    '吉林市',
    '日喀则地区',
    '晋城市',
    '攀枝花市',
    '南投县',
    '丹东市',
    '赣州市',
    '抚州市',
    '南京市',
    '兴安盟',
    '唐山市',
    '绍兴市',
    '黄石市',
    '昌都地区',
    '昌吉回族自治州',
    '香港岛',
    '淮安市',
    '荆门市',
    '三亚市',
    '烟台市',
    '湘西土家族苗族自治州',
    '湘潭市',
    '丽江市',
    '连云港市',
    '丽水市',
    '临沧市',
    '阳江市',
  ];

  /**
   * 获取标签列表
   * @returns 100 条随机生成的城市标签数据
   */
  getTags(): TagsResponseDto {
    const list: TagItemDto[] = [];

    // 生成 100 条随机标签数据
    for (let i = 0; i < 100; i++) {
      list.push({
        name: this.cities[Math.floor(Math.random() * this.cities.length)],
        value: Math.floor(Math.random() * 100),
        type: Math.floor(Math.random() * 3),
      });
    }

    return {
      data: {
        list,
      },
    };
  }
}
