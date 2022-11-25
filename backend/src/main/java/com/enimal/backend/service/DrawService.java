package com.enimal.backend.service;

import com.enimal.backend.dto.Draw.AnimalAllDrawDto;
import com.enimal.backend.dto.Draw.AnimalSelectDrawDto;
import com.enimal.backend.dto.Draw.NftBadgeShowDto;
import com.enimal.backend.dto.Draw.NftCollectionDto;

public interface DrawService {

    AnimalAllDrawDto drawAllAnimal(String userId);

    AnimalSelectDrawDto drawSelectAnimal(String userId, String animal);

    NftBadgeShowDto nftCollection(NftCollectionDto nftCollectionDto, String userId);
}
