package ecommerce.com.api.products.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

// esse arquivo deve gerar uma tabela

@Entity
@Table(name="Produtos")
@Getter
@Setter

public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // id definido acima
    private String nomeProd;
    private String marca;
    private Float preco;
    private String tipo;
    private String[] tamanhos;
}
