import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './tables/User';
import { Category } from './tables/Category';
import { Product } from './tables/Product';
import { ProductProperties } from './tables/ProductProperties';
import { About } from './tables/About';
import { UserController } from './controllers/user/user.controller';
import { CategoryController } from './controllers/category/category.controller';
import { ProductController } from './controllers/product/product.controller';
import { ProductpropertiesController } from './controllers/productproperties/productproperties.controller';
import { AboutController } from './controllers/about/about.controller';
import { UserService } from './services/user/user.service';
import { CategoryService } from './services/category/category.service';
import { ProductService } from './services/product/product.service';
import { ProductpropertiesService } from './services/productproperties/productproperties.service';
import { AboutService } from './services/about/about.service';
import { JwtModule } from '@nestjs/jwt'
import { ProductimagesService } from './services/productimages/productimages.service';
import { ProductimagesController } from './controllers/productimages/productimages.controller';
import { Images } from './tables/Images';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'razer_project',
      entities: [User, Category, Product, ProductProperties, Images, About],
      synchronize: false
    }),
    TypeOrmModule.forFeature([User, Category, Product, ProductProperties, Images, About]), 
    JwtModule.register({
      secret: 'Razer_Nest',
      signOptions: {expiresIn: '7d'}
    }),
  ],
  
  controllers: [AppController, UserController, CategoryController, ProductController, ProductpropertiesController, ProductimagesController, AboutController],
  providers: [AppService, UserService, CategoryService, ProductService, ProductpropertiesService, ProductimagesService, AboutService],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
