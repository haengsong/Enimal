package com.enimal.backend.service;

import com.enimal.backend.dto.Etc.AnimalShowDto;
import com.enimal.backend.dto.Etc.CreditRegistDto;

public interface EtcService {
    AnimalShowDto detailAnimal();

    CreditRegistDto registCredit(Integer percent, Integer firstCredit, String userId);
}
