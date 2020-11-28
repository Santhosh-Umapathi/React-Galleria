import React from 'react';

//Colors
import colors from '../colors/colors';

// React Icons
import { BsSearch as SearchIcon } from 'react-icons/bs';
import { FaHeart as AddFavoriteIcon } from 'react-icons/fa';
import { FaRegHeart as RemoveFavoriteIcon } from 'react-icons/fa';
import { AiOutlineLike as UpsIcon } from 'react-icons/ai';
import { AiOutlineDislike as DownsIcon } from 'react-icons/ai';
import { FaUserSecret as AuthorIcon } from 'react-icons/fa';








export default
{ 
    searchIcon: <SearchIcon style={{color: colors.primary.darkGray, fontSize: '30px'}}/>,
    addFavoriteIcon: <AddFavoriteIcon style={{color: colors.primary.darkGray, fontSize: '30px'}}/>,
    removeFavoriteIcon: <RemoveFavoriteIcon style={{color: colors.secondary.red, fontSize: '30px'}}/>,
    upsIcon: <UpsIcon style={{color: colors.primary.white, fontSize: '30px'}}/>,
    downsIcon: <DownsIcon style={{color: colors.primary.white, fontSize: '30px'}}/>,
    authorIcon: <AuthorIcon style={{color: colors.primary.white, fontSize: '30px'}}/>,

}