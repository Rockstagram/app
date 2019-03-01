import React from 'react';
import { connect } from 'react-redux';
import { InfoPanel } from 'components';
import { LINKS } from 'Routes';
import './StartPanels.css';

const StartPanels = ({ user }) => {
  const { trial } = user;
  const cObjs = [
    {
      id: 'insta-follow',
      icon: 'address-book',
      title: 'Insta Follower',
      link: `${LINKS.instaFollow}/new`,
      features: ['More real followers', 'Huge Engagement', 'More Customers'],
      shortDesc:
        'Get tons of real followers that are truly interested in your content by auto-following',
      longDesc: `How it works: enter tags related to your niche.
      Rockstagram use machine learning to find people with huge interest in your topic.
      Rockstagram starts following them. This way, people see your channel and follow you back.`
    },
    {
      id: 'insta-clean',
      icon: 'briefcase-medical',
      title: 'Insta Cleaner',
      link: `${LINKS.instaClean}/new`,
      features: [
        'Remove useless followers',
        'Increase Trust',
        'Higher Instagram Score'
      ],
      shortDesc:
        'Increase your Instagram Relevance-Score by auto-unfollowing inactive users',
      longDesc: `How it works: Rockstagram use artificial intelligence to figure out useless and inactive
      people within your followers and un-follows them. This helps increasing your Instagram Trust-Score.
      If the follower-following ratio is bad, instagram downgrades your rating. Insta-Clean prevents that.`
    },
    {
      id: 'insta-comment',
      icon: 'comment-dots',
      title: 'Insta Commenter',
      link: `${LINKS.instaComment}/new`,
      features: ['Engage with followers', 'Write meaningful comments'],
      shortDesc:
        'Increase engagement & visibility to potential buyers by auto-commenting posts',
      longDesc: `How it works: Rockstagram use machine learning and artificial intelligence.
      That’s why Rockstagram understands pictures. Rockstagram automatically likes great content
      and write meaningful comments based on the pictures content.
      This is how you’ll skyrocket your followers engagement with your brand automatically in 1 minute setup.`,
      disabled: trial
    },
    {
      id: 'insta-like',
      icon: 'heart',
      title: 'Insta Liker',
      link: `${LINKS.instaLike}/new`,
      features: ['Increase engagement', 'Like great posts'],
      shortDesc:
        'Increase your followers engagement by liking great content automatically',
      longDesc: `How it works: Rockstagram understands images and likes good content automatically.
      This is how you’ll engage your followers to like your content back with 1 minute setup.`
    }
  ];
  const panels = cObjs.map(cObj => <InfoPanel cObj={cObj} key={cObj.id} />);
  return <div className="StartPanels">{panels}</div>;
};

const mapStateToProps = state => ({
  user: state.user.item
});

export default connect(
  mapStateToProps,
  null
)(StartPanels);
