import React from 'react';

//Colors
import colors from '../colors/colors';

// React Icons
import { AiOutlineLike as UpsIcon } from 'react-icons/ai';
import { AiOutlineDislike as DownsIcon } from 'react-icons/ai';
import { FaUserSecret as AuthorIcon } from 'react-icons/fa';


export default
{ 
    upsIcon: <UpsIcon style={{color: colors.primary.grayTwo, fontSize: '30px'}}/>,
    downsIcon: <DownsIcon style={{color: colors.primary.grayTwo, fontSize: '30px'}}/>,
    authorIcon: <AuthorIcon style={{color: colors.primary.grayTwo, fontSize: '30px'}}/>,
}