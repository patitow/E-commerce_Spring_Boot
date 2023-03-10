package ecommerce.com.api.products.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.com.api.products.models.ProductModel;
import ecommerce.com.api.products.models.PostModel;
import ecommerce.com.api.products.service.ProductService;

@RestController
@CrossOrigin(origins = "*")
public class ProductControl {
    
    // implementa as rotas

    @Autowired
    private ProductService ps;

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody ProductModel pm){
        System.out.println(pm.getMarca());
        return ps.cadastrarAlterar(pm,"cadastrar");
    }
    
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProductModel pm){
        return ps.cadastrarAlterar(pm,"alterar");
    }

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<PostModel> remover(@PathVariable long codigo){
        return ps.remover(codigo);
    }

    @GetMapping("/produtos")
    public Iterable<ProductModel> listar(){
        return ps.listarProdutos();
    }

    @GetMapping("/moletons")
    public Iterable<ProductModel> listarTipo1(){
        return ps.listarProdutos();
    }
    
    @GetMapping("/camisetas")
    public Iterable<ProductModel> listarTipo2(){
        return ps.listarProdutos();
    }

    @GetMapping("/regatas")
    public Iterable<ProductModel> listarTipo3(){
        return ps.listarProdutos();
    }

    @GetMapping("/")
    public String route(){
        return "Api de testes funcionando!";
    }
}

