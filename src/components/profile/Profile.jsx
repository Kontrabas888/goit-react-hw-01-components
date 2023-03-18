import cssProfile from "../profile/Profile.module.css"

export const Profile = ({ profile: {
    username,
    tag,
    location,
    avatar,
    stats } }) => {
    return (
    <div className={cssProfile.profile}>
        <div className={cssProfile.description}>
            <img
            src={avatar}
            alt="User avatar"
            className={cssProfile.avatar}
            />
            <h3 className={cssProfile.name}>{username}</h3>
            <p className={cssProfile.tag}>{tag}</p>
            <p className={cssProfile.local}>{location}</p>
        </div>
            
        <div className={cssProfile["soc-set"]}>
            <ul className={cssProfile.stats}>
                <li className={cssProfile.item}>
                    <span className={cssProfile.label}>followers</span>
                    <span class="quantity">{stats.followers}</span>
                </li>
                <li className={cssProfile.item}>
                    <span className={cssProfile.label}>views</span>
                    <span class="quantity">{stats.views}</span>
                </li>
                <li className={cssProfile.item}>
                    <span className={cssProfile.label}>likes</span>
                    <span class="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    </div>
    );
};