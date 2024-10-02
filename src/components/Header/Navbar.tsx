import Button from '@/components/UI/Button';
import Flex from '@/components/UI/Flex';
import Hr from '@/components/UI/Hr';
import Text from '@/components/UI/Text';

interface Props {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <Flex
      width="w-full"
      direction="flex-col"
      gap="gap-3"
      paddingTop="pt-3"
      paddingLeft="pl-3"
      alignItems="ai-start"
    >
      <Flex gap="gap-3">
        {tabs.map((tab) =>
          activeTab === tab ? (
            <Text key={tab} size="title-l" color="c-on-neutral">
              {tab}
            </Text>
          ) : (
            <Button
              key={tab}
              form="btn-text"
              padding="p-0"
              color="c-neutral-container-05"
              hover={{ color: 'hover:c-on-neutral-variant' }}
              onClick={() => setActiveTab(tab)}
            >
              <Text size="headline-s" color="c-inherit">
                {tab}
              </Text>
            </Button>
          )
        )}
      </Flex>
      <Hr
        type="horizontal"
        length="len-full"
        thickness="thk-0.125"
        color="c-on-neutral"
      />
    </Flex>
  );
};
export default Navbar;
