package ecommerce.com.api.products.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ecommerce.com.api.products.models.ProductModel;

@Repository
public interface ProductRepo extends CrudRepository<ProductModel,Long>{
    
}
