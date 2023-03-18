import cssFriend from "../friendList/Friend.module.css"

export const FriendList = ({ friendList }) => {
    return (
        <section className={cssFriend.friendList}>
            <h2 className={cssFriend.title}>Friends</h2>

                <ul className={cssFriend["friend-list"]}>
                    {friendList.map((item) => (
                    <li key={item.id} className={cssFriend.item}>
                        <span className={cssFriend.status}>{item.isOnline}</span>
                            <img className={cssFriend.avatar}
                            src={item.avatar}
                            alt="User avatar"
                            width="48" />
                            <p className={cssFriend.name}>{item.name}</p>
                    </li>
                    ))}
                </ul>
        </section>
    );
};