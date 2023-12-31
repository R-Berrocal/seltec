import { Injectable, Logger } from '@nestjs/common';
import { Repository, FindOptionsWhere } from 'typeorm';
import { PaginationDto } from './dto/pagination.dto';
import { PaginationOutputType } from './types/paginationOutput.type';

@Injectable()
export class CommonService {
  readonly logger: Logger = new Logger();

  async findAll<T>(
    { page = 1, limit = 10, ...propsT }: PaginationDto,
    repository: Repository<T>,
    entities: string[],
  ): Promise<PaginationOutputType<T>> {
    try {
      const count = await repository.count({
        where: propsT as FindOptionsWhere<T>,
      });
      const pages = Math.ceil(count / limit);
      const offset = (page - 1) * limit;
      const results = await repository.find({
        where: propsT as FindOptionsWhere<T>,
        take: limit,
        skip: offset,
        relations: entities,
      });

      return {
        pages,
        count,
        currentPage: page,
        results,
      };
    } catch (error) {
      this.logger.error(error);
    }
  }
}
