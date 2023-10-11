import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { categories } from '../../../database/mocks/categories';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private categories: Category[] = categories;

  findAll() {
    return this.categories;
  }

  findOne(id: string) {
    const category = this.categories.find((item) => item.id === +id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(createCategoryDto: CreateCategoryDto) {
    this.categories.push(createCategoryDto);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const existingCategory = this.findOne(id);
    if (existingCategory) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const categoryIndex = this.categories.findIndex((item) => item.id === +id);
    if (categoryIndex >= 0) {
      this.categories.splice(categoryIndex, 1);
    }
  }
}
