/* format date tarihi alıp ay/gün formatına çevirme */
const formatDate = (dateStr) =>{
    //metin formatındaki tarihi aradaki / işaretine göre parçalara ayırdık.
    const date = (dateStr.split(`.`))

    //formatlayıp döndür
    return date[0] + `/` + date[1]

}

export default formatDate