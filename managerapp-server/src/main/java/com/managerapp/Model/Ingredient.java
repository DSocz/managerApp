package com.managerapp.Model;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity(name = "Ingredient")
@Table(name = "ingredient", schema = "managerapp")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "managerapp.inci_inci_id_seq")
    private Long ingredientId;
    @Column(unique = true)
    private String ingredientName;
    private Boolean wildcard;
    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "tag_snap",
            joinColumns = @JoinColumn(name = "id_inciid"),
            inverseJoinColumns = @JoinColumn(name = "id_tagid"))
    private Set<Tag> tags = new HashSet<>();

    public Ingredient() {
    }

    public Ingredient(String ingredientName, Boolean wildcard) {
        this.ingredientName = ingredientName;
        this.wildcard = wildcard;
    }

    public Long getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(Long ingredientId) {
        this.ingredientId = ingredientId;
    }

    public String getIngredientName() {
        return ingredientName;
    }

    public void setIngredientName(String ingredientName) {
        this.ingredientName = ingredientName;
    }

    public Boolean getWildcard() {
        return wildcard;
    }

    public void setWildcard(Boolean wildcard) {
        this.wildcard = wildcard;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

    public void addTag(Tag tag){
        tags.add(tag);
        tag.getIncis().add(this);
    }

    public void removeTag(Tag tag){
        tags.remove(tag);
        tag.getIncis().remove(tag);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ingredient that = (Ingredient) o;
        return Objects.equals(ingredientId, that.ingredientId) &&
                Objects.equals(ingredientName, that.ingredientName) &&
                Objects.equals(wildcard, that.wildcard) &&
                Objects.equals(tags, that.tags);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ingredientId, ingredientName, wildcard, tags);
    }
}
