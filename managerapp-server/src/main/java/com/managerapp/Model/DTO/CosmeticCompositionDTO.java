package com.managerapp.Model.DTO;

import java.io.Serializable;
import java.util.Objects;

public class CosmeticCompositionDTO implements Serializable {

    String cosmeticComposition;
    boolean wildcard;
    String separator;

    public CosmeticCompositionDTO() {
    }

    public String getCosmeticComposition() {
        return cosmeticComposition;
    }

    public void setCosmeticComposition(String cosmeticComposition) {
        this.cosmeticComposition = cosmeticComposition;
    }

    public boolean isWildcard() {
        return wildcard;
    }

    public void setWildcard(boolean wildcard) {
        this.wildcard = wildcard;
    }

    public String getSeparator() {
        return separator;
    }

    public void setSeparator(String separator) {
        this.separator = separator;
    }

    @Override
    public String toString() {
        return "CosmeticCompositionDTO{" +
                "cosmeticComposition='" + cosmeticComposition + '\'' +
                ", wildcard=" + wildcard +
                ", separator='" + separator + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CosmeticCompositionDTO that = (CosmeticCompositionDTO) o;
        return wildcard == that.wildcard &&
                Objects.equals(cosmeticComposition, that.cosmeticComposition) &&
                Objects.equals(separator, that.separator);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cosmeticComposition, wildcard, separator);
    }
}
