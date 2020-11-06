package com.managerapp.Model;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity(name = "Tag")
@Table(name = "tag", schema = "managerapp")
public class Tag {

    public static int GREEN_TAG = 1;
    public static int YELLOW_TAG = 2;
    public static int RED_TAG = 3;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "managerapp.tag_tag_id_seq")
    private Long tagId;
    @Column(name = "tag_name", unique = true)
    private String tagName;
    private int rate;
    private String note;
    @ManyToMany(mappedBy = "tags")
    private Set<Ingredient> incis = new HashSet<>();

    public Tag() {
    }

    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public int getRate() { return rate; }

    public void setRate(int rate) { this.rate = rate; }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Set<Ingredient> getIncis() {
        return incis;
    }

    public void setIncis(Set<Ingredient> incis) {
        this.incis = incis;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tag tag = (Tag) o;
        return rate == tag.rate &&
                Objects.equals(tagId, tag.tagId) &&
                Objects.equals(tagName, tag.tagName) &&
                Objects.equals(note, tag.note) &&
                Objects.equals(incis, tag.incis);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tagId, tagName, rate, note, incis);
    }
}
