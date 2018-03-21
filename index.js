import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class PageView extends Component {
  renderOverlaySaveArea() {
    const { overlayStyles } = this.props;
    return (
      <SafeAreaView style={[styles.overlay, overlayStyles]} />
    );
  }

  render() {
    const { children, translucent, style, ...rest } = this.props;
    const pageViewStyles = [
      styles.container,
      style
    ];

    const pageViewProps = {};

    if (translucent) {
      pageViewProps.forceInset = {
        top: 'never',
        bottom: 'never',
      }
    }

    return (
      <SafeAreaView style={pageViewStyles} {...pageViewProps} {...rest}>
        {children}
        {translucent && this.renderOverlaySaveArea()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }
});
